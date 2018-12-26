SELECT * FROM `hyf_fp_c6_g2`.modules
INNER JOIN clacess_modules
ON modules.moduleid = clacess_modules.moduleid
WHERE clacess_modules.classid = 2 ;

