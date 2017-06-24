SET ANDROID_VERSION=24.0.3

CALL ionic build android

CALL cordova build --release android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./secure/gospeltoolbox-release-key.keystore platforms\android\build\outputs\apk\android-armv7-release-unsigned.apk gospeltoolbox

"%ANDROID_HOME%\build-tools\%ANDROID_VERSION%\zipalign.exe" -f -v 4 platforms\android\build\outputs\apk\android-armv7-release-unsigned.apk platforms\android\build\outputs\apk\sevenarrows.apk