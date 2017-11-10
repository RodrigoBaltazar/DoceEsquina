#!/usr/bin/python

import glob

lista =  glob.glob("/Users/rodrigobaltazar/Dropbox/projetos_git/2017/DoceEsquina/fotos/salgados/*.jpg")
f = open('salgados.txt', 'w')
for item in lista:
    if item[0] == item[-1]:
        item += 1
        f.writelines(item)
f.close()
