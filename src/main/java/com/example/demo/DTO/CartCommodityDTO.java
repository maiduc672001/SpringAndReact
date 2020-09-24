package com.example.demo.DTO;

import lombok.Data;

@Data
public class CartCommodityDTO {
    private Long cartcommodityid;
    private UserDTO userDTO;
    private CommodityDTO commodityDTO;
    private Long amount;
}
