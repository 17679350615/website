package com.example.second.dao;


import com.example.second.entity.Teacher;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component(value = "TeacherDao")
public interface TeacherDao {
    //List理解为容器，里面装着Teacher对象，意思是函数返回装着Teacher的List
    List<Teacher> findAllTeachers();

    int deleteTeacherById(Long uid);

    int insert(Teacher teacher);

    int addTeacher(Teacher teacher);

    //返回一个Teacher对象
    Teacher selectByPrimaryKey(Long uid);

    int updateTeacher(Teacher teacher);

    int updateByPrimaryKey(Teacher teacher);

    List<Teacher> findTeacherByName(String name);

    //Param用来在Dao中声明参数
    Integer deleteTeachersByIds(@Param("ids") Integer[] ids);

    int getCountTeachers();
}
