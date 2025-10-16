# Nodejs
•	open-source corss-platform runtime environment that allows developers to execute js code outside of a web browser.
•	It enables developers to use js for server-side programming,allowing for the creation of scalable network applications.
•	Rich ecosystem with NPM
•	Cross platsorm

# Common uses
•	Web application development
•	Real-time applications
•	Microservices
•	Serverless computing

# Key components
•	Single threaded – it relies on something called the Event loop to manage multiple tasks without needing multiple threads.
•	Event Driven – can start a task, move on to the next one, and check on the first task when its done.
•	Event-Loop – ables to do multiple tasks. Timers like setTimeOut and setInterval, callbacks, call.
•	Non-blocking I/O – doesn’t wait for tasks to finish before moving to the next one.
•	V8 Javascript Engine- js code turns into computer code, clean up unused memory. 

# Modules in Node.js
•	Core modules(http,fs,path)-Heading files,creating web services,working with file paths.
•	Third party modules(express,doteny,body-parser etc)
•	Custom modules( )

1.	File System(fs) – reading and writing a file
2.	Http
3.	Path
4.	url
5.	os
6.	crypto

File System(Streams)
•	abstract interface
•	working with data that is ‘streamed’ in chunks rather than being read or write at once
•	Readable streams, writable streams, Duplex streams, transform streams
