package com.example.demo.Service;

import com.example.demo.Convert.CartCommodityConvert;
import com.example.demo.Convert.UserConvert;
import com.example.demo.DTO.CartCommodityDTO;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.CartCommodityEntity;
import com.example.demo.Entity.CommodityEntity;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.CartCommodityRepository;
import com.example.demo.Repository.CommodityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartCommodityService {
    @Autowired
    private UserConvert userConvert;
    @Autowired
    private CartCommodityRepository cartCommodityRepository;
    @Autowired
    private CommodityRepository commodityRepository;
    @Autowired
    private CartCommodityConvert cartCommodityConvert;
    public String addCommodity(Long commodityid, UserDTO userDTO){
        UserEntity entity=userConvert.dtoToEntity(userDTO);
        CommodityEntity commodityEntity=commodityRepository.findById(commodityid).get();
        CartCommodityEntity cartCommodityEntity=cartCommodityRepository.getByUserEntityAndCommodityEntity(entity,commodityEntity);
        if(cartCommodityEntity==null){
            CartCommodityEntity cartCommodityEntity1=new CartCommodityEntity();
            cartCommodityEntity1.setUserEntity(entity);
            cartCommodityEntity1.setCommodityEntity(commodityEntity);
            cartCommodityEntity1.setAmount((long)1);
            cartCommodityRepository.save(cartCommodityEntity1);
        }
        return "success";
    }
    public List<CartCommodityDTO> getCart(UserDTO dto){
        UserEntity entity=userConvert.dtoToEntity(dto);
        List<CartCommodityEntity> cartCommodityEntities=cartCommodityRepository.getAllByUserEntity(entity);
        List<CartCommodityDTO> cartCommodityDTOS=new ArrayList<>();
        for (CartCommodityEntity item:cartCommodityEntities) {
            CartCommodityDTO dto1=cartCommodityConvert.entityToDto(item);
            dto1.setUserDTO(null);
            cartCommodityDTOS.add(dto1);
        }
        return cartCommodityDTOS;
    }
    public String updateCart(List<CartCommodityDTO> cartCommodityDTOS,UserDTO dto){
        for (CartCommodityDTO item:cartCommodityDTOS) {
            item.setUserDTO(dto);
            CartCommodityEntity entity=cartCommodityConvert.dtoToEntity(item);
            cartCommodityRepository.save(entity);
        }
        return "success";
    }
    public String deleteCart(List<CartCommodityDTO> cartCommodityDTOS,UserDTO dto){
        for (CartCommodityDTO item:cartCommodityDTOS) {
            item.setUserDTO(dto);
            CartCommodityEntity entity=cartCommodityConvert.dtoToEntity(item);
            cartCommodityRepository.delete(entity);
        }
        return "Success";
    }
    public String deleteProductCart(Long id){
        CartCommodityEntity cartCommodityEntity=cartCommodityRepository.getOne(id);
        cartCommodityRepository.delete(cartCommodityEntity);
        return "Success";
    }
}
