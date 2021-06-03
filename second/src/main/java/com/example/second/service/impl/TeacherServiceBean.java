package com.example.second.service.impl;

import com.example.second.dao.TeacherCopyDao;
import com.example.second.dao.TeacherDao;
import com.example.second.entity.Teacher;
import com.example.second.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//给当前类命名一个别名，不加括号就是默认别名，就是当前类名首字母小写
@Service
public class TeacherServiceBean implements TeacherService {

    @Autowired
    private TeacherDao teacherDao;


    @Autowired
    TeacherCopyDao teacherCopyDao;

    public List<Teacher> findAllTeachers(){
        return this.teacherDao.findAllTeachers();
    }

    @Transactional
    public void addTeacher(Teacher teacher) {
        this.teacherDao.addTeacher(teacher);
        Integer count = this.teacherDao.getCountTeachers();
    }

    public void deleteTeacherById(Long uid) {
        this.teacherDao.deleteTeacherById(uid);
        Integer count = this.teacherDao.getCountTeachers();

    }

    public void updateTeacher(Teacher teacher) {
        this.teacherDao.updateTeacher(teacher);
    }

    public List<Teacher> findTeacherByName(String name) {
        return this.teacherDao.findTeacherByName(name);
    }

    public Integer deleteTeachersByIds(Integer[] ids) {
        return  this.teacherDao.deleteTeachersByIds(ids);
    }



}
