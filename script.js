const language = (document.body.dataset.language || "python").toLowerCase();

const topicNames = [
    "Introduction",
    "Variables & Data Types",
    "Operators",
    "Conditional Statements",
    "Loops",
    "Functions"
];

const topicList = document.getElementById("topicList");
const lessonContent = document.getElementById("lessonContent");

function createQuiz(question, options, answer, explanation) {
    return { question, options, answer, explanation };
}

function createLesson(title, movie, movieExample, description, code, output, explanation, quiz) {
    return {
        title,
        movie,
        movieExample,
        description,
        code,
        output,
        explanation,
        quiz
    };
}

const lessons = {
    python: [
        createLesson(
            "Introduction to Python",
            "Thuppakki",
            "Thuppakki movie-la Vijay oru mission-a plan panni execute pannuvaar. Python-la instructions order-ah execute aagum. Program instructions computer-ku enna seiyanum nu sollum.",
            "Python is a beginner-friendly programming language. It is used for web development, automation, data science and AI.",
            `print("Hello, World!")
print("Welcome to Python")`,
            `Hello, World!
Welcome to Python`,
            [
                "print() is used to display output.",
                "Python is easy to read and write.",
                "Python executes statements from top to bottom."
            ],
            [
                createQuiz("Which function displays output in Python?", ["input()", "print()", "show()", "display()"], 1, "print() displays output."),
                createQuiz("Python is a ______ language.", ["Programming", "Markup", "Styling", "Database"], 0, "Python is a programming language."),
                createQuiz("Which statement prints Hello?", ['print("Hello")', 'input("Hello")', 'show("Hello")', 'display("Hello")'], 0, "print() is the correct output function.")
            ]
        ),

        createLesson(
            "Variables & Data Types",
            "Nanban",
            "Nanban movie-la students marks and names store pannuvanga. Python-la variables use panni name, mark, age madhiri values store pannalam.",
            "A variable is a name used to store a value. Python supports int, float, str and bool data types.",
            `name = "Vijay"
age = 25
mark = 95.5
passed = True

print(name)
print(age)
print(mark)
print(passed)`,
            `Vijay
25
95.5
True`,
            [
                "int stores whole numbers.",
                "float stores decimal numbers.",
                "str stores text.",
                "bool stores True or False."
            ],
            [
                createQuiz("Which data type stores text?", ["int", "float", "str", "bool"], 2, "str is used to store text."),
                createQuiz("Which data type stores 10.5?", ["int", "float", "str", "bool"], 1, "10.5 is a decimal value, so it is float."),
                createQuiz("What is the value of passed?", ["10", "False", "True", "None"], 2, "The variable passed contains True.")
            ]
        ),

        createLesson(
            "Operators",
            "Thirumalai",
            "Thirumalai movie-la actions-ku calculations and comparisons irukkum. Python operators use panni addition, subtraction and comparisons pannalam.",
            "Operators perform calculations and comparisons on values.",
            `a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a > b)`,
            `15
5
50
True`,
            [
                "+ performs addition.",
                "- performs subtraction.",
                "* performs multiplication.",
                "> compares two values."
            ],
            [
                createQuiz("Which operator performs multiplication?", ["+", "-", "*", "/"], 2, "* is the multiplication operator."),
                createQuiz("What is 10 + 5?", ["10", "15", "5", "50"], 1, "10 + 5 equals 15."),
                createQuiz("What does == check?", ["Assignment", "Equality", "Addition", "Division"], 1, "== checks whether two values are equal.")
            ]
        ),

        createLesson(
            "Conditional Statements",
            "Mersal",
            "Mersal movie-la situation-ku suitable decision eduppanga. Python-la if and else use panni condition based decisions edukka mudiyum.",
            "Conditional statements execute code depending on whether a condition is True or False.",
            `mark = 85

if mark >= 50:
    print("Pass")
else:
    print("Fail")`,
            `Pass`,
            [
                "if checks a condition.",
                "else runs when the if condition is False.",
                "Indentation defines the block of code."
            ],
            [
                createQuiz("Which keyword checks a condition?", ["for", "if", "def", "print"], 1, "if checks a condition."),
                createQuiz("What is printed when mark is 85?", ["Fail", "Pass", "85", "Error"], 1, "85 is greater than or equal to 50."),
                createQuiz("Which block runs when if is False?", ["if", "else", "for", "while"], 1, "else runs when the if condition is False.")
            ]
        ),

        createLesson(
            "Loops",
            "Pokkiri",
            "Pokkiri movie-la repeated actions irukkum. Python loops use panni same task-a multiple times execute pannalam.",
            "Loops are used to repeat a block of code.",
            `for i in range(1, 4):
    print(i)`,
            `1
2
3`,
            [
                "for loop repeats over a sequence.",
                "range(1, 4) produces 1, 2 and 3.",
                "The ending number is excluded."
            ],
            [
                createQuiz("Which keyword is used for a loop?", ["if", "for", "def", "class"], 1, "for is used to create a for loop."),
                createQuiz("How many times does range(1, 4) run?", ["2", "3", "4", "1"], 1, "It produces 1, 2 and 3."),
                createQuiz("Which loop repeats while a condition is True?", ["if", "while", "else", "print"], 1, "while repeats as long as its condition is True.")
            ]
        ),

        createLesson(
            "Functions",
            "Kaththi",
            "Kaththi movie-la different tasks-ku different methods irukkum. Python functions use panni code-a reusable blocks-ah divide pannalam.",
            "A function is a reusable block of code that performs a specific task.",
            `def greet():
    print("Vanakkam")

greet()`,
            `Vanakkam`,
            [
                "def is used to define a function.",
                "The function name is greet.",
                "greet() calls the function."
            ],
            [
                createQuiz("Which keyword defines a function?", ["function", "def", "create", "fun"], 1, "def defines a Python function."),
                createQuiz("What is used to call greet?", ["def greet", "greet()", "call greet", "print greet"], 1, "greet() calls the function."),
                createQuiz("Why are functions useful?", ["Repeat code manually", "Reuse code", "Delete code", "Stop Python"], 1, "Functions allow code reuse.")
            ]
        )
    ],

    c: [
        createLesson(
            "Introduction to C",
            "Ghilli",
            "Ghilli movie-la Vijay quick-ah actions execute pannuvaar. C program-layum statements order-ah execute aagum.",
            "C is a general-purpose programming language. It is widely used for system programming.",
            `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
            `Hello, World!`,
            [
                "#include <stdio.h> includes input and output functions.",
                "main() is the starting point.",
                "printf() displays output."
            ],
            [
                createQuiz("Which function displays output in C?", ["scanf()", "printf()", "input()", "display()"], 1, "printf() displays output."),
                createQuiz("Where does a C program start?", ["printf()", "main()", "return()", "include"], 1, "Execution starts from main()."),
                createQuiz("Which header supports printf()?", ["math.h", "stdio.h", "string.h", "time.h"], 1, "stdio.h provides standard input and output functions.")
            ]
        ),

        createLesson(
            "Variables & Data Types",
            "Sachein",
            "Sachein movie-la names and scores store pannuvanga. C-la variables use panni values store pannalam.",
            "Variables store values. Common C data types include int, float and char.",
            `#include <stdio.h>

int main() {
    int age = 25;
    float mark = 95.5;
    char grade = 'A';

    printf("%d\\n", age);
    printf("%.1f\\n", mark);
    printf("%c", grade);

    return 0;
}`,
            `25
95.5
A`,
            [
                "int stores whole numbers.",
                "float stores decimal values.",
                "char stores a single character.",
                "%d, %f and %c are format specifiers."
            ],
            [
                createQuiz("Which type stores whole numbers?", ["float", "int", "char", "double"], 1, "int stores whole numbers."),
                createQuiz("Which format specifier is used for int?", ["%f", "%c", "%d", "%s"], 2, "%d is used for int."),
                createQuiz("Which type stores a single character?", ["int", "char", "float", "double"], 1, "char stores a single character.")
            ]
        ),

        createLesson(
            "Operators",
            "Beast",
            "Beast movie-la different actions nadakkum. C operators use panni calculations and comparisons pannalam.",
            "Operators perform arithmetic, comparison and logical operations.",
            `#include <stdio.h>

int main() {
    int a = 10, b = 5;

    printf("%d\\n", a + b);
    printf("%d\\n", a * b);
    printf("%d", a > b);

    return 0;
}`,
            `15
50
1`,
            [
                "+ performs addition.",
                "* performs multiplication.",
                "In C, 1 represents true and 0 represents false."
            ],
            [
                createQuiz("Which operator performs addition?", ["+", "*", "%", "=="], 0, "+ performs addition."),
                createQuiz("What is 10 * 5?", ["15", "50", "5", "100"], 1, "10 multiplied by 5 equals 50."),
                createQuiz("In C, what represents true?", ["0", "1", "-1 only", "2"], 1, "A true comparison generally evaluates to 1.")
            ]
        ),

        createLesson(
            "Conditional Statements",
            "Bigil",
            "Bigil movie-la team selection conditions based-ah nadakkum. C-la if and else use panni decisions edukka mudiyum.",
            "if and else statements execute code based on a condition.",
            `#include <stdio.h>

int main() {
    int mark = 85;

    if (mark >= 50) {
        printf("Pass");
    } else {
        printf("Fail");
    }

    return 0;
}`,
            `Pass`,
            [
                "if checks a condition.",
                "else runs when the condition is false.",
                "Curly braces define the code block."
            ],
            [
                createQuiz("Which keyword checks a condition?", ["for", "if", "int", "return"], 1, "if checks a condition."),
                createQuiz("What is printed for mark = 85?", ["Fail", "Pass", "85", "Error"], 1, "85 is greater than or equal to 50."),
                createQuiz("Which keyword handles the alternative?", ["else", "while", "break", "main"], 0, "else handles the alternative branch.")
            ]
        ),

        createLesson(
            "Loops",
            "Master",
            "Master movie-la repeated training scenes irukkum. C loops use panni statements repeat pannalam.",
            "Loops repeat a block of code while a condition is satisfied.",
            `#include <stdio.h>

int main() {
    for (int i = 1; i <= 3; i++) {
        printf("%d\\n", i);
    }

    return 0;
}`,
            `1
2
3`,
            [
                "for loop has initialization, condition and update.",
                "i++ increases i by one.",
                "The loop stops when i becomes greater than 3."
            ],
            [
                createQuiz("Which loop is used in the example?", ["while", "for", "do-while", "if"], 1, "The example uses a for loop."),
                createQuiz("What does i++ do?", ["Decrease by one", "Increase by one", "Multiply by two", "Reset to zero"], 1, "i++ increments i by one."),
                createQuiz("How many numbers are printed?", ["2", "3", "4", "1"], 1, "The loop prints 1, 2 and 3.")
            ]
        ),

        createLesson(
            "Functions",
            "Leo",
            "Leo movie-la tasks different people perform pannuvanga. C functions use panni code-a reusable blocks-ah organize pannalam.",
            "A function is a block of code that performs a specific task.",
            `#include <stdio.h>

void greet() {
    printf("Vanakkam");
}

int main() {
    greet();
    return 0;
}`,
            `Vanakkam`,
            [
                "void means the function does not return a value.",
                "greet() is the function name.",
                "greet() is called inside main()."
            ],
            [
                createQuiz("Which keyword defines this function?", ["void", "for", "if", "switch"], 0, "void is the return type in this example."),
                createQuiz("How is greet called?", ["greet", "greet()", "call greet", "void greet"], 1, "greet() calls the function."),
                createQuiz("Why use functions?", ["Reuse code", "Make code longer", "Remove variables", "Stop execution"], 0, "Functions support code reuse.")
            ]
        )
    ],

    cpp: [
        createLesson(
            "Introduction to C++",
            "Vettaikaaran",
            "Vettaikaaran movie-la tasks organized-ah execute aagum. C++ program-layum statements order-ah execute aagum.",
            "C++ is a general-purpose programming language that supports procedural and object-oriented programming.",
            `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`,
            `Hello, World!`,
            [
                "iostream supports input and output.",
                "cout displays output.",
                "main() is the starting point."
            ],
            [
                createQuiz("Which object displays output in C++?", ["cin", "cout", "printf", "input"], 1, "cout displays output."),
                createQuiz("Which header is used here?", ["stdio.h", "iostream", "math.h", "string.h"], 1, "iostream supports C++ input and output."),
                createQuiz("Where does execution begin?", ["cout", "main()", "return", "include"], 1, "Execution begins from main().")
            ]
        ),

        createLesson(
            "Variables & Data Types",
            "Azhagiya Tamil Magan",
            "Azhagiya Tamil Magan movie-la different identities irukkum. C++ variables use panni different values store pannalam.",
            "Variables store data. Common types are int, float, char and string.",
            `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    float mark = 95.5;
    char grade = 'A';

    cout << age << endl;
    cout << mark << endl;
    cout << grade;

    return 0;
}`,
            `25
95.5
A`,
            [
                "int stores whole numbers.",
                "float stores decimal values.",
                "char stores a single character."
            ],
            [
                createQuiz("Which type stores whole numbers?", ["float", "int", "char", "string"], 1, "int stores whole numbers."),
                createQuiz("Which type stores a single character?", ["int", "char", "float", "string"], 1, "char stores one character."),
                createQuiz("What is the value of age?", ["25", "95.5", "A", "0"], 0, "age is initialized with 25.")
            ]
        ),

        createLesson(
            "Operators",
            "Sura",
            "Sura movie-la actions and calculations irukkum. C++ operators use panni arithmetic and comparison pannalam.",
            "Operators perform arithmetic and comparison operations.",
            `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 5;

    cout << a + b << endl;
    cout << a * b << endl;
    cout << (a > b);

    return 0;
}`,
            `15
50
1`,
            [
                "+ performs addition.",
                "* performs multiplication.",
                "A true comparison is displayed as 1."
            ],
            [
                createQuiz("Which operator performs multiplication?", ["+", "-", "*", "=="], 2, "* performs multiplication."),
                createQuiz("What is 10 + 5?", ["5", "10", "15", "50"], 2, "10 + 5 equals 15."),
                createQuiz("Which operator checks equality?", ["=", "==", "+", "*"], 1, "== checks equality.")
            ]
        ),

        createLesson(
            "Conditional Statements",
            "Thalaivaa",
            "Thalaivaa movie-la decisions situation-ku based-ah edukkappadum. C++ if and else use panni conditions check pannalam.",
            "Conditional statements choose which block of code should execute.",
            `#include <iostream>
using namespace std;

int main() {
    int mark = 85;

    if (mark >= 50) {
        cout << "Pass";
    } else {
        cout << "Fail";
    }

    return 0;
}`,
            `Pass`,
            [
                "if checks the condition.",
                "else runs when the condition is false.",
                "Curly braces group statements."
            ],
            [
                createQuiz("Which keyword checks a condition?", ["for", "if", "cout", "int"], 1, "if checks a condition."),
                createQuiz("What is printed for mark = 85?", ["Fail", "Pass", "85", "Error"], 1, "85 satisfies mark >= 50."),
                createQuiz("Which keyword handles the alternative?", ["else", "while", "return", "include"], 0, "else handles the alternative.")
            ]
        ),

        createLesson(
            "Loops",
            "Jilla",
            "Jilla movie-la repeated activities irukkum. C++ loops use panni statements repeat pannalam.",
            "Loops execute a block of code repeatedly.",
            `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 3; i++) {
        cout << i << endl;
    }

    return 0;
}`,
            `1
2
3`,
            [
                "for loop repeats a block.",
                "i++ increments the counter.",
                "The loop ends when its condition becomes false."
            ],
            [
                createQuiz("Which loop is used in the example?", ["while", "for", "if", "switch"], 1, "The example uses a for loop."),
                createQuiz("What does i++ do?", ["Decrease", "Increase by one", "Multiply", "Reset"], 1, "i++ increments the counter."),
                createQuiz("How many numbers are printed?", ["2", "3", "4", "1"], 1, "The loop prints 1, 2 and 3.")
            ]
        ),

        createLesson(
            "Functions",
            "Puli",
            "Puli movie-la different tasks-ku separate actions irukkum. C++ functions use panni reusable code create pannalam.",
            "Functions are reusable blocks of code that perform specific tasks.",
            `#include <iostream>
using namespace std;

void greet() {
    cout << "Vanakkam";
}

int main() {
    greet();
    return 0;
}`,
            `Vanakkam`,
            [
                "void means no return value.",
                "greet() defines the function.",
                "Calling greet() executes it."
            ],
            [
                createQuiz("Which keyword defines the function?", ["void", "for", "if", "return"], 0, "void is the function's return type."),
                createQuiz("How is greet called?", ["greet", "greet()", "call greet", "void greet"], 1, "greet() calls the function."),
                createQuiz("What is a function used for?", ["Code reuse", "Deleting code", "Stopping code", "Changing language"], 0, "Functions allow code reuse.")
            ]
        )
    ],

    java: [
        createLesson(
            "Introduction to Java",
            "Villu",
            "Villu movie-la actions organized-ah nadakkum. Java program-layum statements order-ah execute aagum.",
            "Java is a popular object-oriented programming language.",
            `class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            `Hello, World!`,
            [
                "class defines a class.",
                "main() is the starting point.",
                "System.out.println() displays output."
            ],
            [
                createQuiz("Which method displays output?", ["print()", "println()", "input()", "show()"], 1, "System.out.println() displays output."),
                createQuiz("Where does Java execution begin?", ["class", "main()", "println()", "String"], 1, "Execution begins in main()."),
                createQuiz("Java is primarily which type of language?", ["Object-oriented", "Markup", "Styling", "Database"], 0, "Java is an object-oriented programming language.")
            ]
        ),

        createLesson(
            "Variables & Data Types",
            "Shahjahan",
            "Shahjahan movie-la names and details store pannuvanga. Java variables use panni values store pannalam.",
            "Variables store data. Java types include int, double, char and boolean.",
            `class Main {
    public static void main(String[] args) {
        int age = 25;
        double mark = 95.5;
        char grade = 'A';

        System.out.println(age);
        System.out.println(mark);
        System.out.println(grade);
    }
}`,
            `25
95.5
A`,
            [
                "int stores whole numbers.",
                "double stores decimal values.",
                "char stores a single character."
            ],
            [
                createQuiz("Which type stores whole numbers?", ["double", "int", "char", "boolean"], 1, "int stores whole numbers."),
                createQuiz("Which type stores decimal values?", ["int", "char", "double", "boolean"], 2, "double stores decimal values."),
                createQuiz("Which type stores True or False?", ["int", "double", "boolean", "char"], 2, "boolean stores true or false.")
            ]
        ),

        createLesson(
            "Operators",
            "Kushi",
            "Kushi movie-la actions and comparisons irukkum. Java operators use panni calculations and comparisons pannalam.",
            "Operators perform arithmetic, comparison and logical operations.",
            `class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;

        System.out.println(a + b);
        System.out.println(a * b);
        System.out.println(a > b);
    }
}`,
            `15
50
true`,
            [
                "+ performs addition.",
                "* performs multiplication.",
                "> compares two values."
            ],
            [
                createQuiz("Which operator performs multiplication?", ["+", "-", "*", "=="], 2, "* performs multiplication."),
                createQuiz("What is 10 + 5?", ["5", "10", "15", "50"], 2, "10 + 5 equals 15."),
                createQuiz("Which operator checks equality?", ["=", "==", "+", "*"], 1, "== checks equality.")
            ]
        ),

        createLesson(
            "Conditional Statements",
            "Youth",
            "Youth movie-la decisions situation-ku based-ah edukkappadum. Java if and else use panni conditions check pannalam.",
            "Conditional statements execute code depending on a condition.",
            `class Main {
    public static void main(String[] args) {
        int mark = 85;

        if (mark >= 50) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }
    }
}`,
            `Pass`,
            [
                "if checks a condition.",
                "else runs when the condition is false.",
                "Curly braces define the code block."
            ],
            [
                createQuiz("Which keyword checks a condition?", ["for", "if", "class", "int"], 1, "if checks a condition."),
                createQuiz("What is printed for mark = 85?", ["Fail", "Pass", "85", "Error"], 1, "85 is greater than or equal to 50."),
                createQuiz("Which keyword handles the alternative?", ["else", "while", "return", "static"], 0, "else handles the alternative.")
            ]
        ),

        createLesson(
            "Loops",
            "Vaseegara",
            "Vaseegara movie-la repeated scenes irukkum. Java loops use panni same code-a repeat pannalam.",
            "Loops repeat a block of code while a condition is satisfied.",
            `class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println(i);
        }
    }
}`,
            `1
2
3`,
            [
                "for loop repeats a block.",
                "i++ increments the counter.",
                "The loop stops when the condition becomes false."
            ],
            [
                createQuiz("Which loop is used in the example?", ["while", "for", "if", "switch"], 1, "The example uses a for loop."),
                createQuiz("What does i++ do?", ["Decrease", "Increase by one", "Multiply", "Reset"], 1, "i++ increments the counter."),
                createQuiz("How many numbers are printed?", ["2", "3", "4", "1"], 1, "The loop prints 1, 2 and 3.")
            ]
        ),

        createLesson(
            "Functions",
            "Thamizhan",
            "Thamizhan movie-la tasks organized-ah perform pannuvanga. Java methods use panni reusable code create pannalam.",
            "A method is a reusable block of code that performs a specific task.",
            `class Main {
    static void greet() {
        System.out.println("Vanakkam");
    }

    public static void main(String[] args) {
        greet();
    }
}`,
            `Vanakkam`,
            [
                "static allows the method to be called without creating an object.",
                "void means no return value.",
                "greet() calls the method."
            ],
            [
                createQuiz("Which keyword defines a method with no return value?", ["int", "void", "class", "return"], 1, "void means the method does not return a value."),
                createQuiz("How is greet called?", ["greet", "greet()", "call greet", "void greet"], 1, "greet() calls the method."),
                createQuiz("Why use methods?", ["Reuse code", "Delete code", "Stop Java", "Change data type"], 0, "Methods allow code reuse.")
            ]
        )
    ]
};

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderTopics() {
    if (!topicList || !lessonContent) {
        console.error("topicList or lessonContent element is missing.");
        return;
    }

    topicList.innerHTML = "";

    topicNames.forEach((topic, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "topic-btn";
        button.textContent = topic;

        button.addEventListener("click", () => {
            showTopic(index);
        });

        topicList.appendChild(button);
    });

    showTopic(0);
}

function showTopic(index) {
    const languageLessons = lessons[language] || lessons.python;
    const lesson = languageLessons[index];

    if (!lesson) {
        return;
    }

    document.querySelectorAll(".topic-btn").forEach((button, buttonIndex) => {
        button.classList.toggle("active", buttonIndex === index);
    });

    lessonContent.innerHTML = `
        <article class="lesson">
            <h2>${escapeHTML(lesson.title)}</h2>

            <section>
                <h3>Introduction</h3>
                <p>${escapeHTML(lesson.description)}</p>
            </section>

            <section>
                <h3>Vijay Movie Example: ${escapeHTML(lesson.movie)}</h3>
                <p>${escapeHTML(lesson.movieExample)}</p>
            </section>

            <section>
                <h3>Code Example</h3>
                <pre><code>${escapeHTML(lesson.code)}</code></pre>
            </section>

            <section>
                <h3>Expected Output</h3>
                <pre class="output">${escapeHTML(lesson.output)}</pre>
            </section>

            <section>
                <h3>Explanation</h3>
                <ul>
                    ${lesson.explanation.map(point => `
                        <li>${escapeHTML(point)}</li>
                    `).join("")}
                </ul>
            </section>

            <section>
                <h3>Quiz - 3 Questions</h3>
                <div class="quiz-box">
                    ${lesson.quiz.map((item, questionIndex) => `
                        <div class="quiz-question" data-question-index="${questionIndex}">
                            <p>
                                <strong>
                                    ${questionIndex + 1}.
                                    ${escapeHTML(item.question)}
                                </strong>
                            </p>

                            ${item.options.map((option, optionIndex) => `
                                <button
                                    type="button"
                                    class="quiz-option"
                                    data-option-index="${optionIndex}">
                                    ${escapeHTML(option)}
                                </button>
                            `).join("")}

                            <p class="quiz-feedback" aria-live="polite"></p>
                        </div>
                    `).join("")}
                </div>
            </section>
        </article>
    `;

    attachQuizEvents(lesson);
}

function attachQuizEvents(lesson) {
    const questionElements = lessonContent.querySelectorAll(".quiz-question");

    questionElements.forEach((questionElement, questionIndex) => {
        const quizItem = lesson.quiz[questionIndex];

        const optionButtons = questionElement.querySelectorAll(".quiz-option");

        optionButtons.forEach((button, optionIndex) => {
            button.addEventListener("click", () => {
                checkAnswer(
                    questionElement,
                    quizItem,
                    optionIndex
                );
            });
        });
    });
}

function checkAnswer(questionElement, quizItem, selectedIndex) {
    const buttons = questionElement.querySelectorAll(".quiz-option");
    const feedback = questionElement.querySelector(".quiz-feedback");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === quizItem.answer) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== quizItem.answer) {
            button.classList.add("wrong");
        }
    });

    if (selectedIndex === quizItem.answer) {
        feedback.textContent = "Correct! " + quizItem.explanation;
        feedback.className = "quiz-feedback correct-feedback";
    } else {
        feedback.textContent =
            "Incorrect. Correct answer: " +
            quizItem.options[quizItem.answer] +
            ". " +
            quizItem.explanation;

        feedback.className = "quiz-feedback wrong-feedback";
    }
}

renderTopics();