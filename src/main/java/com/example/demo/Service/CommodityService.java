package com.example.demo.Service;

import com.example.demo.Convert.CommodityConvert;
import com.example.demo.DTO.CategoryDTO;
import com.example.demo.DTO.CommodityDTO;
import com.example.demo.Entity.CategoryEntity;
import com.example.demo.Entity.CommodityEntity;
import com.example.demo.Repository.CategoryRepository;
import com.example.demo.Repository.CommodityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommodityService {
    @Autowired
    private CommodityRepository commodityRepository;
    @Autowired
    private CommodityConvert commodityConvert;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CategoryRepository categoryRepository;
    public List<CommodityDTO> getCommoditySale(){
        List<CommodityEntity> commodityEntities=commodityRepository.findAllBySale();
        List<CommodityDTO> commodityDTOS=new ArrayList<>();
        for (CommodityEntity item: commodityEntities) {
            CommodityDTO dto=commodityConvert.entityToDto(item);
            commodityDTOS.add(dto);
        }
        return commodityDTOS;
    }
    public List<CommodityDTO> getCommodity(Long categoryid){
        List<CommodityEntity> commodityEntities=null;
        if(categoryid!=0){
            CategoryEntity categoryEntity=categoryRepository.getOne(categoryid);
            commodityEntities=commodityRepository.findAllByCategoryEntity(categoryEntity);
        }else{
            commodityEntities=commodityRepository.findAll();
        }
        List<CommodityDTO> commodityDTOS=new ArrayList<>();
        for (CommodityEntity item:commodityEntities) {
            CommodityDTO dto=commodityConvert.entityToDto(item);
            commodityDTOS.add(dto);
        }
        return commodityDTOS;
    }
    public CommodityDTO getDetailProduct(Long commodityid){
        CommodityEntity entity=commodityRepository.getOne(commodityid);
        return commodityConvert.entityToDto(entity);
    }
    public String saveProduct(CommodityDTO commodityDTO){
        CommodityEntity commodityEntity=commodityConvert.dtoToEntity(commodityDTO);
        commodityRepository.save(commodityEntity);
        return "success";
    }
}
