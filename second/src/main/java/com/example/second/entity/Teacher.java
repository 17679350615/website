package com.example.second.entity;



import javax.validation.constraints.*;
import java.sql.Time;
import java.util.Date;


public class Teacher {
    private long uid;

    /*@Size(min = 2,max = 6,message = "姓名长度必须为2-6")
    @Pattern(regexp = "^[\u4e00-\u9fa5]$", message = "姓名必须为汉字")*/
    private String name;

    /*@DecimalMin(value = "18", message = "年龄必须大于18")
    @DecimalMax(value = "60", message = "年龄必须小于60")*/
    private Integer age;

    /*@NotEmpty(message = "性别不能为空")
    @Pattern(regexp = "^[男|女]$", message = "性别必须为男或女")*/
    private String sex;

    private Date date1;
    private Time date2;
    private Boolean state;
    private String interview;

    /*@Size(min = 2,max = 20,message = "专业必须在2-20字符之间")
    @Pattern(regexp = "^[\u4e00-\u9fa5]$", message = "专业必须是汉字")*/
    private String major;

    private String hobby;
    private String[] hobbys;
    private String address;
    private String[] addresses;

    /*@DecimalMin(value = "0", message = "薪资必须大于0")*/
    private Integer salary;


    private Double degree;

    /*@DecimalMin(value = "60", message = "成绩必须大于60")
    @DecimalMax(value = "100", message = "成绩必须小于100")*/
    private Double mark;

    private String color;

   /* @Size(min = 2,max = 20, message = "email必须在2-20个字符之间")
    @Pattern(regexp = "^[A-Za-z0-9]$", message = "email必须由数字和字母组成")*/
    private String email;

    @NotEmpty
    private String emailStyle;

    /*@Size(min = 6,max = 20, message = "密码必须在6-20个字符之间")
    @Pattern(regexp = "^[A-Za-z0-9]$", message = "密码必须由数字和字母构成")*/
    private String code;

    /*@DecimalMin(value = "150", message = "身高必须大于150")
    @DecimalMax(value = "220", message = "身高必须小于220")*/
    private Integer stature;

    /*@DecimalMin(value = "35", message = "体重必须大于35")
    @DecimalMax(value = "200", message = "体重必须小于200")*/
    private Integer weight;


    private String submitLink;

    /*@Size(min = 2,max = 10, message = "职位必须在2-10字符之间")
    @Pattern(regexp = "^[\u4e00-\u9fa5]$", message = "职位必须是汉字")*/
    private String status;

    /*@Size(min = 10,max = 40, message = "自我介绍必须在10-40字符之间")
    @Pattern(regexp = "^[\\u3002|\\uff1f|\\uff01|\\uff0c|\\u3001|\\uff1b|\\uff1a|\\u201c|\\u201d|\\u2018|\\u2019|\\uff08|\\uff09|\\u300a|\\u300b|\\u3008|\\u3009|\\u3010|\\u3011|\\u300e|\\u300f|\\u300c|\\u300d|\\ufe43|\\ufe44|\\u3014|\\u3015|\\u2026|\\u2014|\\uff5e|\\ufe4f|\\uffe5|\\u4e00-\\u9fa5|0-9a-zA-Z]", message = "自我介绍必须由汉字和标点符号组成")*/
    private String introduce;





    public Date getDate1() {
        return date1;
    }

    public void setDate1(Date date1) {
        this.date1 = date1;
    }

    public Time getDate2() {
        return date2;
    }

    public void setDate2(Time date2) {
        this.date2 = date2;
    }


    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }




    public String getInterview() {
        return interview;
    }

    public void setInterview(String interview) {
        this.interview = interview;
    }



    public long getUid() {
        return uid;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    //判断name是否为空，如果不为空则清除name两端的空白符
    public void setName(String name) {
        this.name = name == null ? null: name.trim();
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null: sex.trim();
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String[] getHobbys() {
        return hobbys;
    }

    public void setHobbys(String[] hobbys) {
        this.hobbys = hobbys;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String[] getAddresses() {
        return addresses;
    }

    public void setAddresses(String[] addresses) {
        this.addresses = addresses;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Double getDegree() {
        return degree;
    }

    public void setDegree(Double degree) {
        this.degree = degree;
    }

    public Double getMark() {
        return mark;
    }

    public void setMark(Double mark) {
        this.mark = mark;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailStyle() {
        return emailStyle;
    }

    public void setEmailStyle(String emailStyle) {
        this.emailStyle = emailStyle;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getStature() {
        return stature;
    }

    public void setStature(Integer stature) {
        this.stature = stature;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getSubmitLink() {
        return submitLink;
    }

    public void setSubmitLink(String submitLink) {
        this.submitLink = submitLink;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }
}
