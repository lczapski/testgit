set BASE_DIR=.
java -jar "%BASE_DIR%\JsTestDriver-1.3.5.jar" ^
     --config "%BASE_DIR%\jsTestDriver.conf" ^
     --basePath "%BASE_DIR%" ^
     --tests all --reset