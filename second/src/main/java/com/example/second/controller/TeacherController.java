package com.example.second.controller;


import com.example.second.entity.Teacher;
import com.example.second.service.MenuService;
import com.example.second.service.TeacherService;
import org.omg.CosNaming._BindingIteratorImplBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/teacher")
@CrossOrigin(allowCredentials = "true")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @Autowired
    MenuService menuService;

    /**
     * 查询所有教师
     */
    @GetMapping("/findAllTeachers")
    public List<Teacher> findAllTeachers() {
        return this.teacherService.findAllTeachers();
    }

    /**
     * 增加教师
     */
    @PostMapping("/addTeacher")
    public List<String> addTeacher(@RequestBody @Validated Teacher teacher/*, BindingResult result*/) {
        /*List<String> results = new ArrayList<>();
        if(result.hasErrors()) {
            for (ObjectError error: result.getAllErrors()) {
                System.out.println(error.getDefaultMessage());
                results.add(error.getDefaultMessage());
            }
            return results;
        }
        this.teacherService.addTeacher(teacher);
        results.add("success");
        return results;*/


        List<String> results = new ArrayList<>();
        String regex_name = "^[\u4e00-\u9fa5]{2,6}$";
        String regex_sex = "^[男|女]$";
        String regex_major = "^[\u4e00-\u9fa5]{2,20}$";
        String regex_email = "^[A-Za-z0-9]{2,20}$";
        String regex_code = "^[A-Za-z0-9]{6,20}$";
        String regex_status = "^[\u4e00-\u9fa5]{2,10}$";
        String regex_introduce = "^[\\u3002|\\uff1f|\\uff01|\\uff0c|\\u3001|\\uff1b|\\uff1a|\\u201c|\\u201d|\\u2018|\\u2019|\\uff08|\\uff09|\\u300a|\\u300b|\\u3008|\\u3009|\\u3010|\\u3011|\\u300e|\\u300f|\\u300c|\\u300d|\\ufe43|\\ufe44|\\u3014|\\u3015|\\u2026|\\u2014|\\uff5e|\\ufe4f|\\uffe5|\\u4e00-\\u9fa5|0-9a-zA-Z]{10,40}$";

        if(!teacher.getName().matches(regex_name)) {
            String error = "姓名必须为2-6个汉字";
            results.add(error);
        } else if(teacher.getAge() > 60 || teacher.getAge() < 18) {
            String error = "年龄必须大于18小于60";
            results.add(error);
        } else if(!teacher.getSex().matches(regex_sex)) {
            String error = "性别必须为男或女";
            results.add(error);
        } else if (!teacher.getMajor().matches(regex_major)) {
            String error = "专业必须为2-20个汉字";
            results.add(error);
        } else if(teacher.getSalary() < 0) {
            String error = "薪资必须大于0";
            results.add(error);
        } else if(teacher.getMark() < 60) {
            String error = "薪资必须大于60";
            results.add(error);
        } else if(!teacher.getEmail().matches(regex_email)) {
            String error = "email必须为2-20个字母和数字组成的字符";
            results.add(error);
        } else if (!teacher.getCode().matches(regex_code)) {
            String error = "密码必须为6-20个字母和数字组成的字符";
            results.add(error);
        } else if(teacher.getStature() < 150 || teacher.getStature() >220) {
            String error = "身高必须大于150cm和小于220cm";
            results.add(error);
        } else if(teacher.getWeight() < 35 || teacher.getWeight() >200) {
            String error = "体重必须大于35kg和小于200kg";
            results.add(error);
        } else if (!teacher.getStatus().matches(regex_status)) {
            String error = "职位必须为2-10个汉字构成";
            results.add(error);
        } else if (!teacher.getIntroduce().matches(regex_introduce)) {
            String error = "自我介绍必须为10-40个汉字和标点符号组成的字符";
            results.add(error);
        } else {
            results.add("success");
        }

        this.teacherService.addTeacher(teacher);
        return results;
    }

    /**
     * 根据教师id删除教师
     */
    @PostMapping("/deleteTeacher")
    public void deleteTeacherById(@RequestParam Long uid) {
        this.teacherService.deleteTeacherById(uid);
    }

    /**
     * 编辑教师
     */
    @PostMapping("/updateTeacher")
    public List<String> updateTeacher(@RequestBody @Validated Teacher teacher/*, BindingResult result*/) {
        /*List<String> results = new ArrayList<>();
        if(result.hasErrors()) {
            for (ObjectError error: result.getAllErrors()) {
                System.out.println(error.getDefaultMessage());
                results.add(error.getDefaultMessage());
            }
            return results;
        }
        this.teacherService.updateTeacher(teacher);
        results.add("success");
        return results;*/

        List<String> results = new ArrayList<>();
        String regex_name = "^[\u4e00-\u9fa5]{2,6}$";
        String regex_sex = "^[男|女]$";
        String regex_major = "^[\u4e00-\u9fa5]{2,20}$";
        String regex_email = "^[A-Za-z0-9]{2,20}$";
        String regex_code = "^[A-Za-z0-9]{6,20}$";
        String regex_status = "^[\u4e00-\u9fa5]{2,10}$";
        String regex_introduce = "^[\\u3002|\\uff1f|\\uff01|\\uff0c|\\u3001|\\uff1b|\\uff1a|\\u201c|\\u201d|\\u2018|\\u2019|\\uff08|\\uff09|\\u300a|\\u300b|\\u3008|\\u3009|\\u3010|\\u3011|\\u300e|\\u300f|\\u300c|\\u300d|\\ufe43|\\ufe44|\\u3014|\\u3015|\\u2026|\\u2014|\\uff5e|\\ufe4f|\\uffe5|\\u4e00-\\u9fa5|0-9a-zA-Z]{10,40}$";

        if(!teacher.getName().matches(regex_name)) {
            String error = "姓名必须为2-6个汉字";
            results.add(error);
        } else if(teacher.getAge() > 60 || teacher.getAge() < 18) {
            String error = "年龄必须大于18小于60";
            results.add(error);
        } else if(!teacher.getSex().matches(regex_sex)) {
            String error = "性别必须为男或女";
            results.add(error);
        } else if (!teacher.getMajor().matches(regex_major)) {
            String error = "专业必须为2-20个汉字";
            results.add(error);
        } else if(teacher.getSalary() < 0) {
            String error = "薪资必须大于0";
            results.add(error);
        } else if(teacher.getMark() < 60) {
            String error = "薪资必须大于60";
            results.add(error);
        } else if(!teacher.getEmail().matches(regex_email)) {
            String error = "email必须为2-20个字母和数字组成的字符";
            results.add(error);
        } else if (!teacher.getCode().matches(regex_code)) {
            String error = "密码必须为6-20个字母和数字组成的字符";
            results.add(error);
        } else if(teacher.getStature() < 150 || teacher.getStature() >220) {
            String error = "身高必须大于150cm和小于220cm";
            results.add(error);
        } else if(teacher.getWeight() < 35 || teacher.getWeight() >200) {
            String error = "体重必须大于35kg和小于200kg";
            results.add(error);
        } else if (!teacher.getStatus().matches(regex_status)) {
            String error = "职位必须为2-10个汉字构成";
            results.add(error);
        } else if (!teacher.getIntroduce().matches(regex_introduce)) {
            String error = "自我介绍必须为10-40个汉字和标点符号组成的字符";
            results.add(error);
        } else {
            results.add("success");
        }

        this.teacherService.updateTeacher(teacher);
        return results;


    }


    /**
     * 根据教师姓名查找教师
     */
    @GetMapping("/findTeacherByName")
    public List<Teacher> findTeacherByName(@RequestParam String name) {
        return this.teacherService.findTeacherByName(name);
    }

    /**
     * 批量删除教师
     */
    @PostMapping("/deleteTeachersByIds")
    public Integer deleteTeachersByIds(Integer[] ids) {
        return this.teacherService.deleteTeachersByIds(ids);
    }



}
