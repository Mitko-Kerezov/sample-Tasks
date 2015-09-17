#! /bin/bash

gitresult=$( { git status | grep "fatal: Not a git repository" > /dev/null; } 2>&1 )
if [[ ! -d "./sample-Tasks" && "${gitresult}" != "" ]]; then
# Cloning to default dir
    echo "=> Downloading sample-Tasks from git"
    printf "\r=> "
    command git clone "git@github.com:NativeScript/sample-Tasks.git"
    cd sample-Tasks
fi

set -e
npmresult=$(npm list -g | grep 'nativescript@');
if [[ "$npmresult" == "" ]]; then
    npm install -g nativescript
fi

tns install
node_modules/typescript/bin/tsc -p ./app
cp ./manifests/AndroidManifest.xml ./platforms/android/src/main

unamestr=`uname`
if [[ "$unamestr" == "Darwin" ]]; then
    tns run ios --emulator
else
    tns run android --emulator
fi

