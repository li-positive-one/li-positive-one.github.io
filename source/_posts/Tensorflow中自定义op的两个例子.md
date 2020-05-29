---
title: "Tensorflow中自定义op的两个例子"
categories:
  - 编程实践
tags:
  - Tensorflow
  - Python
date: 2017-05-01
---

示例1:我们学习出一个恒同变换


```python
import numpy as np
import tensorflow as tf
from tensorflow.python.framework import ops
import numpy as np

def custom_matmul(funcname):
    def f(a, b):
        return np.matmul(a,b)
    return f

def custom_matmul_grad(op, grad):
    return [tf.py_func(custom_matmul('matmul_grad1'), [grad, tf.transpose(op.inputs[1])], tf.float32),
            tf.py_func(custom_matmul('matmul_grad2'), [tf.transpose(op.inputs[0]), grad], tf.float32)]

# Define custom py_func which takes also a grad op as argument:
def py_func(func, inp, Tout, stateful=True, name=None, grad=None):

    # Need to generate a unique name to avoid duplicates:
    rnd_name = 'PyFuncGrad' + str(np.random.randint(0, 1E+8))

    tf.RegisterGradient(rnd_name)(grad)  # see _MySquareGrad for grad example
    g = tf.get_default_graph()
    with g.gradient_override_map({"PyFunc": rnd_name}):
        return tf.py_func(func, inp, Tout, stateful=stateful, name=name)

def pyfunc_test():
    # create data
    x_data = tf.placeholder(dtype=tf.float32, shape=[3,1])
    y_data = tf.placeholder(dtype=tf.float32, shape=[3,1])

    w = tf.Variable(tf.ones([3,3]))
    y = py_func(custom_matmul('name'), [w,x_data], [tf.float32], grad=custom_matmul_grad)

    loss = tf.reduce_mean(tf.square(y - y_data))
    optimizer = tf.train.AdamOptimizer(0.1)
    train = optimizer.minimize(loss)

    print("Pyfunc grad", ops.get_gradient_function(y[0].op))
    with tf.Session() as sess:
        sess.run(tf.global_variables_initializer())        
        for step in range(1000):
            ran = np.random.rand(3,1).astype(np.float32)
            ans = ran
            dic = {x_data: ran, y_data: ans}
            tt = sess.run([train], feed_dict=dic)
            if step % 100 == 0:
                print('step {}'.format(step))
                print('{}'.format(w.eval()))

        #test = sess.run(y, feed_dict={x_data:np.array([[0],[1],[2])})
        #print('test = {}'.format(test))


if __name__ == '__main__':
    pyfunc_test()
```

    Pyfunc grad <function custom_matmul_grad at 0x7f60181d1158>
    step 0
    [[ 0.9000001   0.90000117  0.90000004]
     [ 0.90000004  0.90000075  0.90000004]
     [ 0.9000001   0.90000176  0.9000001 ]]
    step 100
    [[  1.00945520e+00  -8.40856228e-05  -1.38531029e-02]
     [ -9.42480564e-03   1.00150728e+00  -5.25715109e-03]
     [ -1.19535998e-03   1.63702958e-03   1.01351130e+00]]
    step 200
    [[  9.99940336e-01   7.62419877e-05  -4.71634121e-06]
     [ -3.78266304e-06   1.00004244e+00  -4.32819579e-05]
     [ -8.31601501e-05  -3.92800757e-05   1.00019753e+00]]
    step 300
    [[  9.99999821e-01   4.15331755e-07   7.49084165e-07]
     [ -5.45732973e-07   1.00000012e+00  -3.67430317e-07]
     [  3.99243845e-07  -2.52412678e-06   1.00000083e+00]]
    step 400
    [[  9.99999940e-01   7.07783840e-08  -2.49022083e-08]
     [  5.56420900e-08   1.00000000e+00   1.32440938e-08]
     [  6.04069683e-10  -1.87024824e-07   1.00000012e+00]]
    step 500
    [[  1.00000000e+00   3.02750269e-09  -4.36058212e-09]
     [ -1.26462696e-09   1.00000000e+00   1.13272758e-09]
     [ -4.88804694e-08   1.90021368e-08   1.00000012e+00]]
    step 600
    [[  1.00000000e+00   4.74864503e-09  -1.23212629e-09]
     [ -1.27859068e-09   1.00000000e+00   1.08854614e-09]
     [  1.83422522e-08  -5.04616526e-09   1.00000000e+00]]
    step 700
    [[  1.00000000e+00   1.54621693e-09   4.64706537e-11]
     [ -6.52278231e-10   1.00000000e+00   1.07698872e-09]
     [  3.22814344e-08   3.30813066e-08   1.00000000e+00]]
    step 800
    [[  1.00000000e+00   1.14085366e-10  -2.25349095e-09]
     [  5.05051445e-10   1.00000000e+00   1.66086556e-09]
     [ -1.02083888e-08   2.51823873e-09   1.00000000e+00]]
    step 900
    [[  1.00000000e+00   6.23920082e-10   9.54518131e-10]
     [  5.08392162e-10   1.00000000e+00   1.66382574e-09]
     [ -4.58602969e-08   1.36057530e-08   1.00000000e+00]]


示例2-用自定义的矩阵乘法和log实现MNIST


```python
#%% MNIST graph building: single-layer neural network
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data
from numpy import *
import time
import matplotlib.pyplot as plt
def py_func(func, inp, name=None, grad=None): # make out what this function do, and you will know all
    rnd_name = 'PyFuncGrad' + str(random.randint(0, 1E+8))
    tf.RegisterGradient(rnd_name)(grad)
    g = tf.get_default_graph()
    with g.gradient_override_map({"PyFunc": rnd_name}):
        return tf.py_func(func, inp, tf.float32, stateful=True, name=name)
def custom_matmul(funcname):
    def f(a, b):
        return matmul(a,b)
    return f
def custom_matmul_grad(op, grad):
    return [tf.py_func(custom_matmul('matmul_grad1'), [grad, tf.transpose(op.inputs[1])], tf.float32),
            tf.py_func(custom_matmul('matmul_grad2'), [tf.transpose(op.inputs[0]), grad], tf.float32)]
def custom_log(x):
    return log(x)
def custom_reciprocal(x):
    return 1/x
def custom_log_grad(op, grad):
    return grad*tf.py_func(custom_reciprocal, [op.inputs[0]], tf.float32)
single_layer_graph = tf.Graph()
single_layer_sess = tf.Session(graph=single_layer_graph)
with single_layer_graph.as_default():
    x = tf.placeholder(tf.float32)
    W = tf.Variable(tf.zeros([784,10]))
    b = tf.Variable(tf.zeros([10]))
    z = py_func(custom_matmul('custom-matmul'), [x, W], name='custom-matmul', grad=custom_matmul_grad)
    y = tf.nn.softmax(z+b)
    y_ = tf.placeholder(tf.float32)
    logy = py_func(custom_log, [y], name='custom-log', grad=custom_log_grad)
    loss = tf.reduce_mean(-tf.reduce_sum(y_*logy, 1))
    assert loss.op.outputs[0] is loss
    optimizer = tf.train.GradientDescentOptimizer(0.3)
    train = optimizer.minimize(loss)
    iscorrect = tf.cast(tf.equal(tf.argmax(y, 1), tf.argmax(y_, 1)), tf.float32)
    accuracy = tf.reduce_mean(iscorrect)
    init = tf.global_variables_initializer()
    trainable_vars = tf.trainable_variables()
    grads = tf.gradients(loss, trainable_vars)
    train_op = optimizer.apply_gradients(zip(grads, trainable_vars))
with single_layer_sess.as_default():
    init.run()
#%% MNIST-train: single-layer neural network
mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)
lo = []
acs = []
wgs = []
startt = time.time()
with single_layer_graph.as_default():
    with single_layer_sess.as_default() as sess:
        for step in range(2000):
            x_batch, y_batch = mnist.train.next_batch(100)
            _,l,ac,wg = sess.run([train_op, loss, accuracy, grads[0]], feed_dict={x: x_batch, y_: y_batch})
            lo.append(l)
            acs.append(ac)
            wgs.append(linalg.norm(wg))
print('elapsed time: '+str(time.time()-startt))
h = plt.figure()
h.suptitle('check-variables on mini-batch')
h.add_subplot(3,1,1).plot(lo)[0].axes.set_title('loss')
h.add_subplot(3,1,2).plot(acs)[0].axes.set_title('training accuracy')
plt.rc('text', usetex=True)
h.add_subplot(3,1,3).plot(wgs)[0].axes.set_title(r'$|\nabla W|$')
with single_layer_sess.as_default():
    print('test accuracy: '+str(
            accuracy.eval(feed_dict={x: mnist.test.images, y_: mnist.test.labels})))
```

    Extracting MNIST_data/train-images-idx3-ubyte.gz
    Extracting MNIST_data/train-labels-idx1-ubyte.gz
    Extracting MNIST_data/t10k-images-idx3-ubyte.gz
    Extracting MNIST_data/t10k-labels-idx1-ubyte.gz
    elapsed time: 4.2179083824157715
    test accuracy: 0.9211

