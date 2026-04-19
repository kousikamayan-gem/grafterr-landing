// src/ui/PageSkeleton.jsx
import Skeleton from "./Skeleton";

const PageSkeleton = () => {
  return (
    <div className="page-skeleton">

      {/* HERO SECTION */}
      <div className="hero1">
        <Skeleton width="280px" height="70px" className="mb-sm" />
        <Skeleton width="420px" height="70px" className="mb-md" />

        <Skeleton width="500px" height="34px" className="mb-xs" />
        <Skeleton width="420px" height="34px" className="mb-md" />

        <Skeleton width="140px" height="74px" className="btn-skeleton" />
      </div>

      {/* FEATURES TITLE */}
      <div className="features-header">
        <Skeleton width="360px" height="70px" className="mb-sm" />
        <Skeleton width="300px" height="28px" className="mb-md" />

        <Skeleton width="520px" height="14px" className="mb-xs" />
        <Skeleton width="480px" height="14px" className="mb-md" />

        <Skeleton width="120px" height="4px" />
      </div>
</div>
  );
};

export default PageSkeleton;