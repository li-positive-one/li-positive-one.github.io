# for vercel
wget https://github.com/jgm/pandoc/releases/download/2.9/pandoc-2.9-1-amd64.deb
sudo dpkg -i ./pandoc-2.9-1-amd64.deb

sed -i 's#<img src="\.\./images/\(.*\?\)/>#<img src="/images/\1/>#g' ./source/_posts/*.md
sed -i -r 's#^!\[\.\./images/(.*)]\((.*)\)#<img src="/images/\2" alt="\1" style="zoom:100%;" />#g' ./source/_posts/*.md

hexo g
