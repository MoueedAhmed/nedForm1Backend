package com.example.demo.model;

import java.util.ArrayList;
import java.util.Map;

public class Person {
    private String fullName;
    private String department;
    private String rollNo;
    private String year;
    private String date;
    private ArrayList<Map<String,String>> table1;
    private ArrayList<Map<String,String>> table2;

    public Person() {
    }

    public Person(String fullName, String department, String rollNo, String year, String date, ArrayList<Map<String, String>> table1, ArrayList<Map<String, String>> table2) {
        this.fullName = fullName;
        this.department = department;
        this.rollNo = rollNo;
        this.year = year;
        this.date = date;
        this.table1 = table1;
        this.table2 = table2;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getRollNo() {
        return rollNo;
    }

    public void setRollNo(String rollNo) {
        this.rollNo = rollNo;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ArrayList<Map<String, String>> getTable1() {
        return table1;
    }

    public void setTable1(ArrayList<Map<String, String>> table1) {
        this.table1 = table1;
    }

    public ArrayList<Map<String, String>> getTable2() {
        return table2;
    }

    public void setTable2(ArrayList<Map<String, String>> table2) {
        this.table2 = table2;
    }
}
