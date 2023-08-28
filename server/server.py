from flask import Flask, request, jsonify
app = Flask(__name__)

# util will contain all the core routines whereas the server will
# just do the routing of the request
import util
# First routine would be to return the locations in Banglore city
# we have locations in model-/columns.json file
# need to create sub directory called aritfacts in server- directory

@app.route('/get_location_names')
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route('/predict_sentiment',methods=['POST'])
def predict_home_price():
    # When we run HTML file we will get all int inputs in
    # request.form in this form
    txt= request.form['txt']
    response = jsonify({
        'predicted_text': util.get_estimated_price(txt)
    })
    response.headers.add('Access-Control-Allow-Origin','*')

    return response

if __name__ == "__main__":
    print("Starting python Flask Server for House Price Prediction...")
    util.load_saved_artifacts()
    app.run(port=8000)