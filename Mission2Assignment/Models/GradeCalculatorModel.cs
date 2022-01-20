using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100)] public double Assignment { get; set; }
        [Range(0, 100)] public double Group { get; set; }
        [Range(0, 100)] public double Quiz { get; set; }
        [Range(0, 100)] public double Exam { get; set; }
        [Range(0, 100)] public double INTEX { get; set; }
    }
}
