package com.example.demo.Convert;

import com.example.demo.DTO.RoleDTO;
import com.example.demo.Entity.RoleEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoleConvert {
    @Autowired
    private ModelMapper modelMapper;
    public RoleDTO entityToDTO(RoleEntity entity){
        RoleDTO dto=new RoleDTO();
        modelMapper.map(entity,dto);
        return dto;
    }
    public RoleEntity dtoToEntity(RoleDTO dto){
        RoleEntity entity=new RoleEntity();
        modelMapper.map(dto,entity);
        return entity;
    }

}
