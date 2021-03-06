package com.lanyotech.pps.query;

import com.easyjf.core.support.query.QueryObject;
import com.easyjf.util.StringUtils;

public class SupplierQuery extends QueryObject {
	private Long id; 
	private String searchKey ;
	private String searchType ;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSearchKey() {
		return searchKey;
	}

	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}

	public String getSearchType() {
		return searchType;
	}

	public void setSearchType(String searchType) {
		this.searchType = searchType;
	}

	public void customizeQuery() {
		if(this.getSearchKey()!=null && StringUtils.hasLength(this.getSearchKey())){
			this.addQuery("(obj.name like ? or obj.shortName like ? or obj.address like ? or obj.linkMan like ? or obj.email like ? )",
					new Object[]{
						"%"+this.getSearchKey()+"%",
						"%"+this.getSearchKey()+"%",
						"%"+this.getSearchKey()+"%",
						"%"+this.getSearchKey()+"%",
						"%"+this.getSearchKey()+"%"
					}
			);
		}
		super.customizeQuery();
	}
	
}
