output "vpc_id" {
  description = "LUXORA VPC ID"
  value       = module.vpc.vpc_id
}

output "private_subnets" {
  description = "LUXORA private subnet IDs"
  value       = module.vpc.private_subnets
}

output "public_subnets" {
  description = "LUXORA public subnet IDs"
  value       = module.vpc.public_subnets
}