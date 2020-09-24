package com.example.demo.Convert;

import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.UserEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserConvert {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private RoleConvert roleConvert;
    public UserDTO entityToDto(UserEntity entity){
        try {
            UserDTO dto=new UserDTO();
            modelMapper.map(entity,dto);

            dto.setRoleDTO(roleConvert.entityToDTO(entity.getRoleEntity()));
            return dto;
        }catch (Exception e){
            return null;
        }
    }
    public UserEntity dtoToEntity(UserDTO dto){
        try {
            UserEntity entity=new UserEntity();
            modelMapper.map(dto,entity);
            entity.setRoleEntity(roleConvert.dtoToEntity(dto.getRoleDTO()));
            return entity;
        }catch (Exception e){
            return  null;
        }
    }
}
