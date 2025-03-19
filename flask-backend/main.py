from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.chrome.options import Options
from textblob import TextBlob
from flask import Flask, jsonify, request
app = Flask(__name__)
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app,resources={r"/*": {"origins": "http://localhost:5173"}})
app.config['CORS_HEADERS'] = 'Content-Type'
# Navigate to the YouTube video
video_url = " "
    # 'https://www.youtube.com/watch?v=Y8iNez1tCx8'
def fetchSegments(id):
    video_url = id
    chrome_options = Options()
    driver = webdriver.Chrome()
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(video_url)
    time.sleep(8)

    # Scroll to load more comments
    for _ in range(3):
        driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")
        time.sleep(5)

    # Scrape comments
    comments = driver.find_elements(By.XPATH, '//*[@class="yt-core-attributed-string yt-core-attributed-string--white-space-pre-wrap"]')

    allComments=[]
    for comment in comments:
        allComments.append(comment.text)
    driver.quit()
    positive_comments = []
    negative_comments = []
    neutral_comments = []
    returnArray=[]
    for text in allComments:
        analysis = TextBlob(text)
        # Classify based on polarity
        if analysis.sentiment.polarity > 0:
            positive_comments.append(text)
        elif analysis.sentiment.polarity < 0:
            negative_comments.append(text)
        else:
            neutral_comments.append(text)
    returnArray=[positive_comments,negative_comments,neutral_comments]
    return returnArray;



@app.route('/getAnalysedComments', methods=['GET'])
def get_employee_by_id():
    id = request.args.get('id')
    segmentedComments = fetchSegments(id)
    return jsonify({ "message":"Hoooo","data":segmentedComments})

@app.route("/",methods=['GET'])
def health_route():
    return "Server is running"

if __name__ == '__main__':
   app.run(port=5000)