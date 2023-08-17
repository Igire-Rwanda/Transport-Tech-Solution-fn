#include <iostream>
using namespace std;

// Function to print the game board
void printBoard(char board[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << board[i][j];
            if (j < 2)
                cout << " | ";
        }
        cout << endl;
        if (i < 2)
            cout << "---------\n";
    }
}

// Function to check if a player has won
bool checkWin(char board[3][3], char player)
{
    for (int i = 0; i < 3; i++)
    {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
            return true;
        if (board[0][i] == player && board[1][i] == player && board[2][i] == player)
            return true;
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player)
        return true;
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
        return true;
    return false;
}

int main()
{
    char replay;
    do
    {
        // Initialize the game variables
        char board[3][3] = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}}; // Create a 3x3 game board
        char currentPlayer = 'X';                                               // Start with player X
        int row, col;

        cout << "Tic-Tac-Toe Game\n";

        for (int turns = 0; turns < 9; turns++)
        {
            cout << "Current Board:\n";
            printBoard(board);

            // Get player's move
            cout << "Player " << currentPlayer << ", enter row and column (0-2): ";
            cin >> row >> col;

            // Check if the move is valid
            if (row < 0 || row > 2 || col < 0 || col > 2 || board[row][col] != ' ')
            {
                cout << "Invalid move. Try again.\n";
                turns--; // Decrement turns to allow the same player to play again
                continue;
            }

            // Place player's move on the board
            board[row][col] = currentPlayer;

            // Check if the player has won
            if (checkWin(board, currentPlayer))
            {
                cout << "Player " << currentPlayer << " wins!\n";
                printBoard(board);
                break;
            }

            // Switch player for the next turn
            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        }

        // Check for a draw
        if (!checkWin(board, 'X') && !checkWin(board, 'O'))
        {
            cout << "It's a draw!\n";
            printBoard(board);
        }

        // Ask if players want to replay
        cout << "Do you want to play again? (Y/N): ";
        cin >> replay;
    } while (replay == 'y' || replay == 'Y');

    cout << "Thank you for playing! Goodbye.\n";

    return 0;
}
