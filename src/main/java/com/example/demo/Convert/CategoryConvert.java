package com.example.demo.Convert;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.Entity.CategoryEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoryConvert {
    @Autowired
    private ModelMapper modelMapper;
    public CategoryDTO entityToDto(CategoryEntity entity){
        try{
            CategoryDTO dto=new CategoryDTO();
            modelMapper.map(entity,dto);
            return dto;
        }catch (Exception e){
            throw e;
        }
    }
    public CategoryEntity dtoToEntity(CategoryDTO dto){
        try{
            CategoryEntity entity=new CategoryEntity();
            modelMapper.map(dto,entity);
            return entity;
        }catch (Exception e){
            throw e;
        }
    }
}
