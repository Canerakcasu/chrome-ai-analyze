# AI Screenshot Analyzer - Chrome Extension

## 📌 Project Overview
AI Screenshot Analyzer is a Chrome extension that allows users to analyze text using Google Gemini AI. Users can input text, click the "Analyze" button, and receive an AI-generated summary.

## 🚀 Features
- **Text Analysis with Google Gemini AI**
- **Dark Mode UI for a Modern Look**
- **Easy API Configuration (Google Gemini or OpenAI)**
- **Simple & Clean Design**

## 🛠️ Installation
1. **Clone this repository**
   ```bash
   git clone https://github.com/Canerakcasu/ai-screenshot-analyzer.git
   cd ai-screenshot-analyzer
   ```
2. **Load the extension in Chrome**
   - Open `chrome://extensions/` in your browser.
   - Enable "Developer Mode" (top right corner).
   - Click "Load unpacked" and select the project folder.

## ⚙️ API Configuration
By default, the extension uses **Google Gemini AI**. If you want to use **OpenAI API**, follow these steps:

### **🔹 Google Gemini (Default)**
- This extension is configured to work with Google Gemini.
- Get your API key from [Google AI Studio](https://aistudio.google.com/).
- Replace the `GENAI_API_KEY` in `app.py` with your Gemini API key.

### **🔹 OpenAI API (Optional)**
If you prefer using OpenAI (GPT-3.5/GPT-4), modify the `app.py` file:
1. Install OpenAI library (if not already installed):
   ```bash
   pip install openai
   ```
2. Update `app.py`:
   ```python
   import openai

   openai.api_key = "YOUR_OPENAI_API_KEY"

   response = openai.Completion.create(
       engine="text-davinci-003",
       prompt=f"Summarize this: {text}",
       max_tokens=50
   )
   ```
3. Restart your Flask API server.

## 🏗️ Running the API Server
This extension requires a local Flask server to process requests.
1. Install dependencies:
   ```bash
   pip install flask flask-cors google-generativeai
   ```
2. Start the Flask server:
   ```bash
   python app.py
   ```

## 📜 License
This project is licensed under the MIT License.

## ✨ Author
Developed by **Caner Akcasu**  
🔗 GitHub: [CanerAkcasu](https://github.com/Canerakcasu)

