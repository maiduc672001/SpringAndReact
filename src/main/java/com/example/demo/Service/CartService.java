package com.example.demo.Service;

import com.example.demo.Convert.CartConvert;
import com.example.demo.Convert.UserConvert;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.CartCommodityEntity;
import com.example.demo.Entity.CartEntity;
import com.example.demo.Entity.CommodityEntity;
import com.example.demo.Repository.CartRepository;
import com.example.demo.Repository.CommodityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartConvert cartConvert;
    @Autowired
    private UserConvert userConvert;
    @Autowired
    private CommodityRepository commodityRepository;
}
