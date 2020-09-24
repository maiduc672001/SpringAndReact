package com.example.demo.Convert;

import com.example.demo.DTO.CartCommodityDTO;
import com.example.demo.Entity.CartCommodityEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CartCommodityConvert {
    @Autowired
    private UserConvert userConvert;
    @Autowired
    private CommodityConvert commodityConvert;
    public CartCommodityDTO entityToDto(CartCommodityEntity entity){
        try {
            CartCommodityDTO dto=new CartCommodityDTO();
            dto.setAmount(entity.getAmount());
            dto.setCartcommodityid(entity.getCartcommodityid());
            dto.setUserDTO(userConvert.entityToDto(entity.getUserEntity()));
            dto.setCommodityDTO(commodityConvert.entityToDto(entity.getCommodityEntity()));
            return dto;
        }catch (Exception e){
            return null;
        }
    }
    public CartCommodityEntity dtoToEntity(CartCommodityDTO dto){
        try {
            CartCommodityEntity entity=new CartCommodityEntity();
            entity.setAmount(dto.getAmount());
            entity.setCartcommodityid(dto.getCartcommodityid());
            entity.setUserEntity(userConvert.dtoToEntity(dto.getUserDTO()));
            entity.setCommodityEntity(commodityConvert.dtoToEntity(dto.getCommodityDTO()));
            return entity;
        }catch (Exception e){
            return null;
        }
    }
}
