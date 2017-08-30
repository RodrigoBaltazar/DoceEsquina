#!/usr/bin/python

import glob

lista =  glob.glob("/Users/rodrigobaltazar/Dropbox/projetos_git/2017/DoceEsquina/fotos/confeitaria/*.jpg")

for item in lista:
    if item[0] == item[-1]:
        item += 1
    print "<div><img src='" + item + "' alt=''></div>"
