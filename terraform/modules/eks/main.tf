module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 21.0"

  name               = "luxora-eks"
  kubernetes_version = "1.33"

  endpoint_public_access = true

  vpc_id     = var.vpc_id
  subnet_ids = var.private_subnets

  enable_irsa = true

  addons = {
    vpc-cni = {
      before_compute = true
    }

    kube-proxy = {}
    coredns    = {}
  }

  eks_managed_node_groups = {
    main = {
      name           = "luxora-main"
      instance_types = ["t3.small"]

      min_size     = 1
      max_size     = 3
      desired_size = 2

      capacity_type = "ON_DEMAND"

      labels = {
        Project = "LUXORA"
      }

      tags = {
        Project     = "LUXORA"
        Environment = "production"
        ManagedBy   = "Terraform"
      }
    }
  }

  tags = {
    Project     = "LUXORA"
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}