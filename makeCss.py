import sass
import os

print("path")
scriptpath = os.path.dirname(os.path.realpath(__file__))

sass.compile(dirname=(scriptpath+'/sass/', scriptpath+'/publish/resources/css'), output_style='compressed')

