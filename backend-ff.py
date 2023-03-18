from flask import Flask

app = Flask(__name__)

@app.route('/nota/<float:nota1>/<float:nota2>', methods=['GET'])
def calcular_media(nota1, nota2):
  media = (nota1 + nota2) / 2
  return f"A média das notas {nota1} e {nota2} é {media}"

if __name__ == '__main__':
  app.run(debug=True)
