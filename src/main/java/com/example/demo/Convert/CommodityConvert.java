package com.example.demo.Convert;

import com.example.demo.DTO.CommodityDTO;
import com.example.demo.Entity.CommodityEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CommodityConvert {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private CategoryConvert categoryConvert;
    public CommodityDTO entityToDto(CommodityEntity entity){
        try{
            CommodityDTO dto=new CommodityDTO();
            modelMapper.map(entity,dto);
            dto.setCategoryDTO(categoryConvert.entityToDto(entity.getCategoryEntity()));
            return dto;
        }catch (Exception e){
            throw e;
        }
    }
    public  CommodityEntity dtoToEntity(CommodityDTO dto){
        try{
            CommodityEntity entity=new CommodityEntity();
            modelMapper.map(dto,entity);
            entity.setCategoryEntity(categoryConvert.dtoToEntity(dto.getCategoryDTO()));
            return entity;
        }catch (Exception e){
            throw e;
        }
    }
}
