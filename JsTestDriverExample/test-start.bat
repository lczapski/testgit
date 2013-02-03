set BASE_DIR=.
java -jar "%BASE_DIR%\lib\JsTestDriver-1.3.5.jar" ^
     --config "%BASE_DIR%\jsTestDriver.conf" ^
     --basePath "%BASE_DIR%" ^
     --tests all --reset