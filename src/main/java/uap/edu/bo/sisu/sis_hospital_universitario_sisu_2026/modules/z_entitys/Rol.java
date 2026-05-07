package uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.config.AuditoriaConfig;

@Entity
@Table(name = "rol")
@Setter
@Getter
public class Rol extends AuditoriaConfig{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_rol;
    
    private String nombre_rol;
    private String abreviacion_rol;

    // @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
    // @JoinTable(
    //     name = "rol_submenu",
    //     joinColumns = @JoinColumn(name = "id_rol"),
    //     inverseJoinColumns = @JoinColumn(name = "id_sub_menu")
    // )
    // @OrderBy("descripcion_sub_menu ASC")
    // private Set<SubMenu> subMenus = new HashSet<>();

    
}
