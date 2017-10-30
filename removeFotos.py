#!/usr/bin/python

import glob
import os
retirar = "285x250.jpg"

Salgado = glob.glob("/home/cruded/Dropbox/projetos_git/2017/DoceEsquina/fotos/salgados/*" + retirar)

for salgadinho in Salgado:
    os.remove(salgadinho)
