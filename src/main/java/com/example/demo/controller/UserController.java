package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.service.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@Controller
public class UserController {

    @Autowired
    FirebaseService firebaseService;

    @GetMapping("/getUserDetails")
    @ResponseBody
    public Person getUserDetails(@RequestHeader String rollNo) throws ExecutionException, InterruptedException {
        return firebaseService.getUserDetails(rollNo);
    }

    @PostMapping("/createUser")
    @ResponseBody
    public Map<String,String> createNewUser(@RequestBody Person person) throws ExecutionException, InterruptedException {
        Map<String,String> map =new HashMap<String, String>();;
        map.put("Result", firebaseService.saveUserDetails(person));
        return map;
    }

    @PutMapping("/updateUser")
    @ResponseBody
    public String updateUser(@RequestBody Person person) throws ExecutionException, InterruptedException {
        return firebaseService.updateUserDetails(person);
    }

    @DeleteMapping("/deleteUser")
    @ResponseBody
    public String deleteUser(@RequestHeader String rollNo) {
        return firebaseService.deleteUser(rollNo);
    }
}