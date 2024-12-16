#include <iostream>
using namespace std;
int main() {
    for(int i = 0; i < 50; i++){
    cout << "Hello World" << endl;
    }
    return 0;
}

//emcc testwasm/testrun.cpp -o output.js -s WASM=1
// eto ung command
//then replace ung output files