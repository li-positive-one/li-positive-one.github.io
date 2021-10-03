# for vercel
yum install wget
mkdir pandoc
wget -qO- https://github.com/jgm/pandoc/releases/download/2.11.1.1/pandoc-2.11.1.1-linux-amd64.tar.gz | \
   tar xvzf - --strip-components 1 -C ./pandoc
export PATH="./pandoc/bin:$PATH"

sed -i 's#<img src="\.\./images/\(.*\?\)/>#<img src="/images/\1/>#g' ./source/_posts/*.md
sed -i -r 's#^!\[\.\./images/(.*)]\((.*)\)#<img src="/images/\2" alt="\1" style="zoom:100%;" />#g' ./source/_posts/*.md

hexo g

