package com.control.syslib.service;

import java.util.List;
import java.util.Map;

import com.control.syslib.entity.Proveedor;


public interface ProveedorService {
	public void create (Proveedor p);
	public void edit (Proveedor p);
	public void delete(int id);
	public List<Map<String, Object>>  read (int id);
	public List<Map<String, Object>> readAll();
}