#!/usr/bin/python

import glob


f = open("salgados.txt", "r+")
lista =  glob.glob("/Users/rodrigobaltazar/Dropbox/projetos_git/2017/DoceEsquina/fotos/salgados/*.jpg")
push = "salgados.push('"
for item in lista:
    if item[0] == item[-1]:
        item += 1
    #f.write("%s\n" % item)
    f.write(push + item +"')""\n")
    #salgados.push("/Path");
f.close()
