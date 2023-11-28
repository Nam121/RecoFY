package com.way2p.movies.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.way2p.movies.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
