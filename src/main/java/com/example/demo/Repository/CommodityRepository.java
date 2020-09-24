package com.example.demo.Repository;

import com.example.demo.Entity.CategoryEntity;
import com.example.demo.Entity.CommodityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommodityRepository extends JpaRepository<CommodityEntity,Long> {
    @Query("select c from CommodityEntity c where c.sale>=15")
    List<CommodityEntity> findAllBySale();
    List<CommodityEntity> findAllByCategoryEntity(CategoryEntity categoryEntity);
}
