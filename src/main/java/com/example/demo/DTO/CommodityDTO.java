package com.example.demo.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CommodityDTO {
    private Long commodityid;
    private String name;
    private Double cost;
    private String image;
    private String description;
    private String information;
    private String shortdescription;
    private Double sale;
    private CategoryDTO categoryDTO;
    private MultipartFile file;
    private Integer amount;
    private Long categoryid;
}
