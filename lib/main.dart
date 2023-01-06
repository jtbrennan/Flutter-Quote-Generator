import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:animated_background/animated_background.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const HomeScreen(),
    );
  }
}


class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold (
        appBar: AppBar(
          title: Text("Quote Generator")
        ),
        body: Center(
                  child: ElevatedButton(onPressed: () async{
                    var url = Uri.parse('https://api.quotable.io/random');
                    var response = await http.get(url);
                    print('Response status: ${response.statusCode}');
                    print('Response body: ${response.body}');
                    var data = jsonDecode(response.body);

                    String quote = data["content"];
                    String author = data["author"];
                    print(quote);
                    print(author);
                    Navigator.of(context).push(MaterialPageRoute(builder: (context) => SecondScreen(quoteText: quote, authorName: author,)));
                   }, child: Text("Generate Quote"),

        ),
        ),

      )

    );
  }
}

class SecondScreen extends StatelessWidget {

  String quoteText;
  String authorName;

  SecondScreen({Key? key, required this.authorName, required this.quoteText}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(child: Scaffold(
      appBar: AppBar(),
      body: Center(child: Column(children: [
        Padding(padding: const EdgeInsets.all(15.0),),
        Text(quoteText, style: TextStyle(fontSize: 22)),
        Align(alignment: Alignment.bottomCenter, child: Text("- $authorName", style: TextStyle(fontSize: 15)))
        
      ],)
      
      )
    ));
    
  }
}

