package com.example.demo.Service;

import com.example.demo.Convert.CategoryConvert;
import com.example.demo.DTO.CategoryDTO;
import com.example.demo.Entity.CategoryEntity;
import com.example.demo.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryConvert categoryConvert;
    @Autowired
    private CategoryRepository categoryRepository;
    public List<CategoryDTO> getCategory(){
        List<CategoryEntity> categoryEntities=categoryRepository.findAll();
        List<CategoryDTO> categoryDTOS=new ArrayList<>();
        for (CategoryEntity item:categoryEntities) {
            CategoryDTO dto=categoryConvert.entityToDto(item);
            categoryDTOS.add(dto);
        }
        return categoryDTOS;
    }
    public CategoryDTO findOne(Long categoryid){
        CategoryEntity entity=categoryRepository.getOne(categoryid);
        return categoryConvert.entityToDto(entity);
    }
}
