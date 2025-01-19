from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To enable CORS for frontend requests

# Route to serve the HTML file
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process_files():
    student_list_file = request.files['studentList']
    submitted_list_file = request.files['submittedList']

    # Read and clean the files
    all_students = set(student_list_file.read().decode('utf-8').strip().split('\n'))
    submitted_students = set(submitted_list_file.read().decode('utf-8').strip().split('\n'))

    # Find missing submissions
    missing_students = list(all_students - submitted_students)

    return jsonify({'missingStudents': missing_students})

if __name__ == '__main__':
    app.run(debug=True)
