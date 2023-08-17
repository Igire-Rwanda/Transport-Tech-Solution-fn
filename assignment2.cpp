#include <iostream>
#include <string>
#include <vector>
#include <ctime>
#include <cstdlib>
#include <algorithm>

using namespace std;

vector<string> words = {
    "hangman",
    "computer",
    "programming",
    "developer",
    "challenge"
};

string selectRandomWord() {
    srand(time(nullptr));
    int randomIndex = rand() % words.size();
    return words[randomIndex];
}

int main() {
    string wordToGuess = selectRandomWord();
    string guessedWord(wordToGuess.length(), '_');

    int maxAttempts = 6;
    int remainingAttempts = maxAttempts;
    vector<char> incorrectGuesses;

    cout << "Welcome to Hangman!" << endl;

    while (remainingAttempts > 0) {
        cout << "Word: " << guessedWord << endl;
        cout << "Incorrect Guesses: ";
        for (char c : incorrectGuesses) {
            cout << c << ", ";
        }
        cout << endl;
        cout << "Guesses Left: " << remainingAttempts << endl;

        char guess;
        cout << "Guess a letter: ";
        cin >> guess;
        cin.ignore();

        if (isalpha(guess)) {
            guess = tolower(guess);

            if (guessedWord.find(guess) != string::npos || find(incorrectGuesses.begin(), incorrectGuesses.end(), guess) != incorrectGuesses.end()) {
                cout << "You've already guessed that letter!" << endl;
                continue;
            }

            size_t found = wordToGuess.find(guess);
            if (found != string::npos) {
                while (found != string::npos) {
                    guessedWord[found] = guess;
                    found = wordToGuess.find(guess, found + 1);
                }

                if (guessedWord == wordToGuess) {
                    cout << "Congratulations! You guessed the word \"" << wordToGuess << "\" correctly" << endl;
                    break;
                }
            } else {
                incorrectGuesses.push_back(guess);
                remainingAttempts--;
            }
        } else {
            cout << "Invalid input. Please enter a valid letter." << endl;
        }
    }

    if (remainingAttempts == 0) {
        cout << "You ran out of attempts. The correct word was \"" << wordToGuess << "\"" << endl;
    }

    return 0;
}
