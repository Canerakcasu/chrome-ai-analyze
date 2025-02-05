from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai  # Google Gemini için gerekli kütüphane

app = Flask(__name__)
CORS(app)

# Google Gemini API Anahtarını Ayarla
genai.configure(api_key="AIzaSyAs5tda_HzTAWPmOtT0zOfd6qRVuVB6VZ8")

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    if not data or "text" not in data:
        return jsonify({"error": "Text is required"}), 400

    text = data["text"]

    try:
        model = genai.GenerativeModel("gemini-pro")  # Gemini AI modeli
        response = model.generate_content(f"Summarize this: {text}")
        
        return jsonify({"summary": response.text.strip()})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("🚀 Flask API Google Gemini ile çalışıyor: http://127.0.0.1:5001")
    app.run(debug=True, port=5001)
