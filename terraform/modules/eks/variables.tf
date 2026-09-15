variable "vpc_id" {
  description = "VPC ID for LUXORA EKS"
  type        = string
}

variable "private_subnets" {
  description = "Private subnet IDs for LUXORA EKS"
  type        = list(string)
}