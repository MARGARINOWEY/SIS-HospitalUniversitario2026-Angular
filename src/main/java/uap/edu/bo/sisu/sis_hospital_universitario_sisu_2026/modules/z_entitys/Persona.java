package uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.config.AuditoriaConfig;

@Entity
@Table(name = "persona")
@Setter
@Getter
public class Persona extends AuditoriaConfig{
    private static final long serialVersionUID = 2629195288020321924L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_persona;

    private String nombres;

    private String ap_paterno;

    private String ap_materno;

    private String grado_academico_persona;
    
    private String ci;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate fecha_nac;

    private String sexo;

    private String direccion;

    private String celular;

    private Integer edad;

    private Integer ru;

    private String matricula_convenio;

    private String codigo_afiliado_sisu;

    private String img_perfil_drive;

    // @ManyToOne(fetch = FetchType.EAGER)
    // @JoinColumn(name = "id_dip")
    // private Dip dip;

    // @ManyToOne(fetch = FetchType.EAGER)
    // @JoinColumn(name = "id_grado_academico")
    // private GradoAcademico grado_academico;

    // @ManyToOne(fetch = FetchType.EAGER)
    // @JoinColumn(name = "id_tipo_estado_civil")
    // private TiposEstadoCivil tipos_estado_civil;

    // @ManyToOne(fetch = FetchType.EAGER)
    // @JoinColumn(name = "id_carrera")
    // private Carrera carrera;

    

}