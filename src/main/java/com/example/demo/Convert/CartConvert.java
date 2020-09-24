package com.example.demo.Convert;

import com.example.demo.DTO.CartDTO;
import com.example.demo.DTO.CommodityDTO;
import com.example.demo.Entity.CartEntity;
import com.example.demo.Entity.CommodityEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CartConvert {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private UserConvert userConvert;
    @Autowired
    private CommodityConvert commodityConvert;
    public CartDTO entityToDto(CartEntity entity){
        try {
CartDTO dto=new CartDTO();
modelMapper.map(entity,dto);
dto.setUserDTO(userConvert.entityToDto(entity.getUserEntity()));
            return dto;
        }catch (Exception e){
            throw e;
        }
    }
    public CartEntity dtoToEntity(CartDTO dto){
        try {
            CartEntity entity=new CartEntity();
            modelMapper.map(dto,entity);
            entity.setUserEntity(userConvert.dtoToEntity(dto.getUserDTO()));
            return entity;
        }catch (Exception e){
            throw e;
        }
    }
}
